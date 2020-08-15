import React, { useEffect, useRef, useState } from 'react';
import { Crop } from 'react-image-crop';
import { connect, ConnectedProps } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

import {
  getCroppedImage
} from '../../utils/imageCropPreviews/imageCropPreviews';
import { IIngredient, IIngredientType } from '../../store/data/types';
import {
  staffCreateNewIngredient,
  staffEditIngredient
} from '../../store/staff/ingredient/actions';
import {
  userCreateNewPrivateIngredient,
  userEditPrivateIngredient
} from '../../store/user/ingredient/actions';
import {
  ICreatingIngredientInfo,
  IEditingIngredientInfo
} from '../../store/user/ingredient/types';
import { NewIngredientView } from './NewIngredientView';

export function NewIngredient({
  dataIngredients,
  dataIngredientTypes,
  dataMyPrivateIngredients,
  editing,
  oneColumnATheme,
  staffCreateNewIngredient,
  staffEditIngredient,
  staffIsAuthenticated,
  staffMessage,
  userCreateNewPrivateIngredient,
  userEditPrivateIngredient,
  userMessage
}: Props): JSX.Element {
  const history = useHistory();
  const { id } = useParams();

  const [ feedback, setFeedback ] = useState("");
  const [ loading, setLoading ] = useState(false);

  const [ editingId, setEditingId ] = useState<number>(0);
  const [ typeId, setTypeId ] = useState<number>(0);
  const [ name, setName ] = useState("");
  const [ description, setDescription ] = useState("");
  const [ prevImage, setPrevImage ] = useState("nobsc-ingredient-default");
  const [ image, setImage ] = useState<string | ArrayBuffer | null>(null);
  const [ fullImage, setFullImage ] = useState<File | null>(null);
  const [ tinyImage, setTinyImage ] = useState<File | null>(null);

  const [ crop, setCrop ] = useState<Crop>({aspect: 280 / 172});
  const [ fullCrop, setFullCrop ] = useState("");
  const [ tinyCrop, setTinyCrop ] = useState("");

  const imageRef = useRef<HTMLImageElement>();

  useEffect(() => {
    const getExistingIngredientToEdit = () => {
      if (!id) {
        const redirectPath = staffIsAuthenticated
          ? '/staff-dashboard' : '/dashboard';
        history.push(redirectPath);
        return;
      }

      setLoading(true);
      window.scrollTo(0,0);

      const [ prev ] = staffIsAuthenticated
        ? dataIngredients.filter(i => i.id === Number(id))
        : dataMyPrivateIngredients.filter(i => i.id === Number(id));

      setEditingId(prev.id);
      setTypeId(prev.ingredient_type_id);
      setName(prev.name);
      setDescription(prev.description);
      setPrevImage(prev.image);
      setLoading(false);
    };

    if (editing) getExistingIngredientToEdit();
  }, []);

  useEffect(() => {
    let isSubscribed = true;

    if (isSubscribed) {
      const message = staffIsAuthenticated ? staffMessage : userMessage;
      const redirectPath = staffIsAuthenticated
        ? '/staff-dashboard' : '/dashboard';

      if (message !== "") window.scrollTo(0,0);

      setFeedback(message);

      if (
        message === "Ingredient created." ||
        message === "Ingredient updated."
      ) {
        setTimeout(() => history.push(redirectPath), 3000);
      }

      setLoading(false);
    }

    return () => {
      isSubscribed = false;
    };
  }, [staffMessage, userMessage]);

  const cancelImage = () => {
    setFullCrop("");
    setTinyCrop("");
    setImage(null);
    setFullImage(null);
    setTinyImage(null);
  };

  const handleDescriptionChange = (e: React.SyntheticEvent<EventTarget>) => 
    setDescription((e.target as HTMLInputElement).value);

  const handleNameChange = (e: React.SyntheticEvent<EventTarget>) =>
    setName((e.target as HTMLInputElement).value);

  // TO DO: remove inner prefixes
  const handleSubmit = () => {
    if (!valid()) return;
    setLoading(true);
    if (editing && editingId) {
      const ingredientInfo = {
        id: editingId,
        ingredientTypeId: typeId,
        name,
        description,
        image,
        fullImage,
        tinyImage,
        prevImage
      };
      if (staffIsAuthenticated) staffEditIngredient(ingredientInfo);
      else userEditPrivateIngredient(ingredientInfo);
    } else {
      const ingredientInfo = {
        ingredientTypeId: typeId,
        name,
        description,
        image,
        fullImage,
        tinyImage,
      };
      if (staffIsAuthenticated) staffCreateNewIngredient(ingredientInfo);
      else userCreateNewPrivateIngredient(ingredientInfo);
    }
  };

  const handleTypeChange = (e: React.SyntheticEvent<EventTarget>) =>
    setTypeId(Number((e.target as HTMLInputElement).value));

  const makeCrops = async (crop: Crop) => {
    if (!imageRef || !imageRef.current) return;
    if (!crop.width) return;

    const full =
      await getCroppedImage(280, 172, imageRef.current, crop, "newFile.jpeg");
    const tiny =
      await getCroppedImage(28, 18, imageRef.current, crop, "newFile.jpeg");

    if (!full || !tiny) return;

    setFullCrop(full.resizedPreview);
    setTinyCrop(tiny.resizedPreview);
    setFullImage(full.resizedFinal);
    setTinyImage(tiny.resizedFinal);
  };

  const onCropChange = (crop: Crop) => setCrop(crop);

  const onCropComplete = (crop: Crop) => makeCrops(crop);

  const onImageLoaded = (image: HTMLImageElement) => imageRef.current = image;

  const onSelectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;

    if (!(target.files && target.files.length > 0)) return;

    const reader = new FileReader();

    reader.addEventListener("load", () => setImage(reader.result));
    reader.readAsDataURL(target.files[0]);
  };

  const valid = () => {
    const validTypeId = typeId !== 0;
    if (!validTypeId) {
      window.scrollTo(0,0);
      setFeedback("You forgot to select the ingredient type...");
      setTimeout(() => setFeedback(""), 3000);
      return false;
    }

    const validName = name.trim() !== "";
    if (!validName) {
      window.scrollTo(0,0);
      setFeedback("Umm, double check your name...");
      setTimeout(() => setFeedback(""), 3000);
      return false;
    }

    const validDescription = description.trim() !== "";
    if (!validDescription) {
      window.scrollTo(0,0);
      setFeedback("Umm, double check your description...");
      setTimeout(() => setFeedback(""), 3000);
      return false;
    }

    return validTypeId && validName && validDescription;
  };

  return (
    <NewIngredientView
      cancelImage={cancelImage}
      crop={crop}
      dataIngredientTypes={dataIngredientTypes}
      description={description}
      editing={editing}
      feedback={feedback}
      fullCrop={fullCrop}
      handleDescriptionChange={handleDescriptionChange}
      handleNameChange={handleNameChange}
      handleSubmit={handleSubmit}
      handleTypeChange={handleTypeChange}
      image={image}
      loading={loading}
      name={name}
      onCropChange={onCropChange}
      onCropComplete={onCropComplete}
      oneColumnATheme={oneColumnATheme}
      onImageLoaded={onImageLoaded}
      onSelectFile={onSelectFile}
      prevImage={prevImage}
      staffIsAuthenticated={staffIsAuthenticated}
      tinyCrop={tinyCrop}
      typeId={typeId}
    />
  );
};

interface RootState {
  auth: {
    staffIsAuthenticated: boolean;
  };
  data: {
    ingredients: IIngredient[];
    ingredientTypes: IIngredientType[];
    myPrivateIngredients: IIngredient[];
  };
  staff: {
    message: string;
  };
  user: {
    message: string;
  };
}

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux & {
  editing: boolean;
  oneColumnATheme: string;
};

const mapStateToProps = (state: RootState) => ({
  staffIsAuthenticated: state.auth.staffIsAuthenticated,
  staffMessage: state.staff.message,
  userMessage: state.user.message,
  dataIngredients: state.data.ingredients,
  dataIngredientTypes: state.data.ingredientTypes,
  dataMyPrivateIngredients: state.data.myPrivateIngredients
});

const mapDispatchToProps = {
  staffCreateNewIngredient: (ingredientInfo: ICreatingIngredientInfo) =>
    staffCreateNewIngredient(ingredientInfo),
  staffEditIngredient: (ingredientInfo: IEditingIngredientInfo) =>
    staffEditIngredient(ingredientInfo),
  userCreateNewPrivateIngredient: (ingredientInfo: ICreatingIngredientInfo) =>
    userCreateNewPrivateIngredient(ingredientInfo),
  userEditPrivateIngredient: (ingredientInfo: IEditingIngredientInfo) =>
    userEditPrivateIngredient(ingredientInfo)
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(NewIngredient);