import React, { useEffect, useRef, useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { Crop } from 'react-image-crop';

import {
  getCroppedImage
} from '../../../utils/imageCropPreviews/imageCropPreviews';
import { IEquipment, IEquipmentType } from '../../../store/data/types';
import {
  ICreatingEquipmentInfo,
  IEditingEquipmentInfo
} from '../../../store/user/equipment/types';
import {
  userCreateNewPrivateEquipment,
  userEditPrivateEquipment
} from '../../../store/user/equipment/actions';
import { NewEquipmentView } from './NewEquipmentView';

export function NewEquipment({
  oneColumnATheme,
  editing,
  message,
  dataEquipmentTypes,
  dataMyPrivateEquipment,
  userCreateNewPrivateEquipment,
  userEditPrivateEquipment
}: Props): JSX.Element {
  const history = useHistory();
  const { id } = useParams();

  const [ feedback, setFeedback ] = useState("");
  const [ loading, setLoading ] = useState(false);

  const [ editingId, setEditingId ] = useState<number>(0);  // null?
  const [ equipmentTypeId, setEquipmentTypeId ] = useState<number>(0);  // null?
  const [ equipmentName, setEquipmentName ] = useState("");
  const [ equipmentDescription, setEquipmentDescription ] = useState("");
  const [
    prevEquipmentImage,
    setPrevEquipmentImage
  ] = useState("nobsc-equipment-default");

  const [ crop, setCrop ] = useState<Crop>({aspect: 280 / 172});
  const [ cropFullSizePreview, setCropFullSizePreview ] = useState("");
  const [ cropTinySizePreview, setCropTinySizePreview ] = useState("");
  const [
    equipmentImage,
    setEquipmentImage
  ] = useState<string | ArrayBuffer | null>(null);
  const [
    fullEquipmentImage,
    setFullEquipmentImage
  ] = useState<File | null>(null);
  const [
    tinyEquipmentImage,
    setTinyEquipmentImage
  ] = useState<File | null>(null);

  const imageRef = useRef<HTMLImageElement>();

  useEffect(() => {
    const getExistingEquipmentToEdit = () => {
      window.scrollTo(0,0);
      setLoading(true);

      const [ prev ] = dataMyPrivateEquipment
      .filter((equ) => equ.equipment_id === Number(id));

      setEditingId(prev.equipment_id);
      setEquipmentTypeId(prev.equipment_type_id);
      setEquipmentName(prev.equipment_name);
      setEquipmentDescription(prev.equipment_description);
      setPrevEquipmentImage(prev.equipment_image);
      setLoading(false);
    };
    if (editing) getExistingEquipmentToEdit();
  }, []);

  useEffect(() => {
    let isSubscribed = true;
    if (isSubscribed) {
      if (message !== "") window.scrollTo(0,0);
      setFeedback(message);
      if (
        message === "Equipment created." ||
        message === "Equipment updated."
      ) {
        setTimeout(() => history.push('/dashboard'), 3000);
      }
      setLoading(false);
    }
    return () => {
      isSubscribed = false;
    };
  }, [message]);

  const handleEquipmentTypeChange = (
    e: React.SyntheticEvent<EventTarget>
  ) => {
    setEquipmentTypeId(Number((e.target as HTMLInputElement).value));
  };

  const handleEquipmentNameChange = (
    e: React.SyntheticEvent<EventTarget>
  ) => {
    setEquipmentName((e.target as HTMLInputElement).value);
  };

  const handleEquipmentDescriptionChange = (
    e: React.SyntheticEvent<EventTarget>
  ) => {
    setEquipmentDescription((e.target as HTMLInputElement).value);
  };

  const onSelectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    if (!(target.files && target.files.length > 0)) return;
    const reader = new FileReader();
    reader.addEventListener("load", () => setEquipmentImage(reader.result));
    reader.readAsDataURL(target.files[0]);
  };

  const onImageLoaded = (image: HTMLImageElement) => imageRef.current = image;

  const onCropChange = (crop: Crop) => setCrop(crop);

  const onCropComplete = (crop: Crop) => makeClientCrops(crop);

  const makeClientCrops = async (crop: Crop) => {
    if (!imageRef || !imageRef.current) return;
    if (!crop.width) return;
    const full = await getCroppedImage(
      280, 172, imageRef.current, crop, "newFile.jpeg"
    );
    const tiny = await getCroppedImage(
      28, 18, imageRef.current, crop, "newFile.jpeg"
    );
    if (!full || !tiny) return;
    setCropFullSizePreview(full.resizedPreview);
    setCropTinySizePreview(tiny.resizedPreview);
    setFullEquipmentImage(full.resizedFinal);
    setTinyEquipmentImage(tiny.resizedFinal);
  };

  const cancelEquipmentImage = () => {
    setCropFullSizePreview("");
    setCropTinySizePreview("");
    setEquipmentImage(null);
    setFullEquipmentImage(null);
    setTinyEquipmentImage(null);
  };

  const valid = () => {
    let validEquipmentTypeId = equipmentTypeId !== 0;
    let validEquipmentName = equipmentName.trim() !== "";
    let validEquipmentDescription = equipmentDescription.trim() !== "";

    if (!validEquipmentTypeId) {
      window.scrollTo(0,0);
      setFeedback("You forgot to select the equipment type...");
      setTimeout(() => setFeedback(""), 3000);
      return false;
    }

    if (!validEquipmentName) {
      window.scrollTo(0,0);
      setFeedback("Umm, double check your name...");
      setTimeout(() => setFeedback(""), 3000);
      return false;
    }

    if (!validEquipmentDescription) {
      window.scrollTo(0,0);
      setFeedback("Umm, double check your description...");
      setTimeout(() => setFeedback(""), 3000);
      return false;
    }

    return (
      equipmentTypeId !== 0 &&
      equipmentName.trim() !== "" &&
      equipmentDescription.trim() !== ""
    );
  };

  const handleSubmit = () => {
    if (!valid()) return;
    setLoading(true);
    if (editing && editingId) {
      const equipmentInfo: IEditingEquipmentInfo = {
        equipmentId: editingId,
        equipmentTypeId,
        equipmentName,
        equipmentDescription,
        equipmentImage,
        fullEquipmentImage,
        tinyEquipmentImage,
        prevEquipmentImage
      };
      userEditPrivateEquipment(equipmentInfo);
    } else {
      const equipmentInfo: ICreatingEquipmentInfo = {
        equipmentTypeId,
        equipmentName,
        equipmentDescription,
        equipmentImage,
        fullEquipmentImage,
        tinyEquipmentImage,
      };
      userCreateNewPrivateEquipment(equipmentInfo);
    }
  };
  
  return (
    <NewEquipmentView
      oneColumnATheme={oneColumnATheme}
      feedback={feedback}
      loading={loading}
      editing={editing}
      equipmentTypeId={equipmentTypeId}
      equipmentName={equipmentName}
      equipmentDescription={equipmentDescription}
      equipmentImage={equipmentImage}
      prevEquipmentImage={prevEquipmentImage}
      dataEquipmentTypes={dataEquipmentTypes}
      handleEquipmentTypeChange={handleEquipmentTypeChange}
      handleEquipmentNameChange={handleEquipmentNameChange}
      handleEquipmentDescriptionChange={handleEquipmentDescriptionChange}
      onSelectFile={onSelectFile}
      onImageLoaded={onImageLoaded}
      crop={crop}
      cropFullSizePreview={cropFullSizePreview}
      cropTinySizePreview={cropTinySizePreview}
      onCropChange={onCropChange}
      onCropComplete={onCropComplete}
      cancelEquipmentImage={cancelEquipmentImage}
      handleSubmit={handleSubmit}
    />
  );
};

interface RootState {
  user: {
    message: string;
  };
  data: {
    equipmentTypes: IEquipmentType[];
    myPrivateEquipment: IEquipment[];
  };
}

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux & {
  oneColumnATheme: string;
  editing: boolean;
};

const mapStateToProps = (state: RootState) => ({
  message: state.user.message,
  dataEquipmentTypes: state.data.equipmentTypes,
  dataMyPrivateEquipment: state.data.myPrivateEquipment
});

const mapDispatchToProps = {
  userCreateNewPrivateEquipment: (equipmentInfo: ICreatingEquipmentInfo) =>
    userCreateNewPrivateEquipment(equipmentInfo),
  userEditPrivateEquipment: (equipmentInfo: IEditingEquipmentInfo) =>
    userEditPrivateEquipment(equipmentInfo)
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(NewEquipment);