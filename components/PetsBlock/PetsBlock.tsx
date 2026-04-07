import css from "./PetsBlock.module.css";
import AddPet from "../AddPet/AddPet";

export default function PetsBlock() {
  return (
    <>
      <div className={css.headingContainer}>
        <h2 className={css.heading}>My pets</h2>
        <AddPet />
      </div>
    </>
  );
}
