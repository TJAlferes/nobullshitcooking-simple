import React, { useEffect, useRef, useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { Crop } from 'react-image-crop';

import {
  getCroppedImage
} from '../../../utils/imageCropPreviews/imageCropPreviews';
import { IIngredient, IIngredientType } from '../../../store/data/types';
import {
  ICreatingIngredientInfo,
  IEditingIngredientInfo
} from '../../../store/user/ingredient/types';
import {
  userCreateNewPrivateIngredient,
  userEditPrivateIngredient
} from '../../../store/user/ingredient/actions';
import { NewIngredientView } from './NewIngredientView';

export function NewIngredient({
  oneColumnATheme,
  editing,
  message,
  dataIngredientTypes,
  dataMyPrivateIngredients,
  userCreateNewPrivateIngredient,
  userEditPrivateIngredient
}: Props): JSX.Element {
  const history = useHistory();
  const { id } = useParams();

  const [ feedback, setFeedback ] = useState("");
  const [ loading, setLoading ] = useState(false);

  const [ editingId, setEditingId ] = useState<number>(0);
  const [ ingredientTypeId, setIngredientTypeId ] = useState<number>(0);
  const [ ingredientName, setIngredientName ] = useState("");
  const [ ingredientDescription, setIngredientDescription ] = useState("");
  const [
    prevIngredientImage,
    setPrevIngredientImage
  ] = useState("nobsc-ingredient-default");

  const [ crop, setCrop ] = useState<Crop>({aspect: 280 / 172});
  const [ cropFullSizePreview, setCropFullSizePreview ] = useState("");
  const [ cropTinySizePreview, setCropTinySizePreview ] = useState("");
  const [
    ingredientImage,
    setIngredientImage
  ] = useState<string | ArrayBuffer | null>(null);
  const [
    fullIngredientImage,
    setFullIngredientImage
  ] = useState<File | null>(null);
  const [
    tinyIngredientImage,
    setTinyIngredientImage
  ] = useState<File | null>(null);

  const imageRef = useRef<HTMLImageElement>();

  useEffect(() => {
    const getExistingIngredientToEdit = () => {
      window.scrollTo(0,0);
      setLoading(true);

      const [ prev ] = dataMyPrivateIngredients
      .filter((ing) => ing.ingredient_id === Number(id));

      setEditingId(prev.ingredient_id);
      setIngredientTypeId(prev.ingredient_type_id);
      setIngredientName(prev.ingredient_name);
      setIngredientDescription(prev.ingredient_description);
      setPrevIngredientImage(prev.ingredient_image);
      setLoading(false);
    };
    if (editing) getExistingIngredientToEdit();
  }, []);

  useEffect(() => {
    let isSubscribed = true;
    if (isSubscribed) {
      if (message !== "") window.scrollTo(0,0);
      setFeedback(message);
      if (
        message === "Ingredient created." ||
        message === "Ingredient updated."
      ) {
        setTimeout(() => history.push('/dashboard'), 3000);
      }
      setLoading(false);
    }
    return () => {
      isSubscribed = false;
    };
  }, [message]);

  const handleIngredientTypeChange = (
    e: React.SyntheticEvent<EventTarget>
  ) => {
    setIngredientTypeId(Number((e.target as HTMLInputElement).value));
  };

  const handleIngredientNameChange = (
    e: React.SyntheticEvent<EventTarget>
  ) => {
    setIngredientName((e.target as HTMLInputElement).value);
  };

  const handleIngredientDescriptionChange = (
    e: React.SyntheticEvent<EventTarget>
  ) => {
    setIngredientDescription((e.target as HTMLInputElement).value);
  };

  const onSelectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    if (!(target.files && target.files.length > 0)) return;
    const reader = new FileReader();
    reader.addEventListener("load", () => setIngredientImage(reader.result));
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
    setFullIngredientImage(full.resizedFinal);
    setTinyIngredientImage(tiny.resizedFinal);
  };

  const cancelIngredientImage = () => {
    setCropFullSizePreview("");
    setCropTinySizePreview("");
    setIngredientImage(null);
    setFullIngredientImage(null);
    setTinyIngredientImage(null);
  };

  const valid = () => {
    let validIngredientTypeId = ingredientTypeId !== 0;
    let validIngredientName = ingredientName.trim() !== "";
    let validIngredientDescription = ingredientDescription.trim() !== "";

    if (!validIngredientTypeId) {
      window.scrollTo(0,0);
      setFeedback("You forgot to select the ingredient type...");
      setTimeout(() => setFeedback(""), 3000);
      return false;
    }

    if (!validIngredientName) {
      window.scrollTo(0,0);
      setFeedback("Umm, double check your name...");
      setTimeout(() => setFeedback(""), 3000);
      return false;
    }

    if (!validIngredientDescription) {
      window.scrollTo(0,0);
      setFeedback("Umm, double check your description...");
      setTimeout(() => setFeedback(""), 3000);
      return false;
    }

    return (
      ingredientTypeId !== 0 &&
      ingredientName.trim() !== "" &&
      ingredientDescription.trim() !== ""
    );
  };

  const handleSubmit = () => {
    if (!valid()) return;
    setLoading(true);
    if (editing && editingId) {
      const ingredientInfo: IEditingIngredientInfo = {
        ingredientId: editingId,
        ingredientTypeId,
        ingredientName,
        ingredientDescription,
        ingredientImage,
        fullIngredientImage,
        tinyIngredientImage,
        prevIngredientImage
      };
      userEditPrivateIngredient(ingredientInfo);
    } else {
      const ingredientInfo: ICreatingIngredientInfo = {
        ingredientTypeId,
        ingredientName,
        ingredientDescription,
        ingredientImage,
        fullIngredientImage,
        tinyIngredientImage
      };
      userCreateNewPrivateIngredient(ingredientInfo);
    }
  };

  return (
    <NewIngredientView
      oneColumnATheme={oneColumnATheme}
      feedback={feedback}
      loading={loading}
      editing={editing}
      ingredientTypeId={ingredientTypeId}
      ingredientName={ingredientName}
      ingredientDescription={ingredientDescription}
      ingredientImage={ingredientImage}
      prevIngredientImage={prevIngredientImage}
      dataIngredientTypes={dataIngredientTypes}
      handleIngredientTypeChange={handleIngredientTypeChange}
      handleIngredientNameChange={handleIngredientNameChange}
      handleIngredientDescriptionChange={handleIngredientDescriptionChange}
      onSelectFile={onSelectFile}
      onImageLoaded={onImageLoaded}
      crop={crop}
      cropFullSizePreview={cropFullSizePreview}
      cropTinySizePreview={cropTinySizePreview}
      onCropChange={onCropChange}
      onCropComplete={onCropComplete}
      cancelIngredientImage={cancelIngredientImage}
      handleSubmit={handleSubmit}
    />
  );
};

interface RootState {
  user: {
    message: string;
  };
  data: {
    ingredientTypes: IIngredientType[];
    myPrivateIngredients: IIngredient[];
  };
}

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux & {
  oneColumnATheme: string;
  editing: boolean;
};

const mapStateToProps = (state: RootState) => ({
  message: state.user.message,
  dataIngredientTypes: state.data.ingredientTypes,
  dataMyPrivateIngredients: state.data.myPrivateIngredients
});

const mapDispatchToProps = {
  userCreateNewPrivateIngredient: (ingredientInfo: ICreatingIngredientInfo) =>
    userCreateNewPrivateIngredient(ingredientInfo),
  userEditPrivateIngredient: (ingredientInfo: IEditingIngredientInfo) =>
    userEditPrivateIngredient(ingredientInfo)
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(NewIngredient);