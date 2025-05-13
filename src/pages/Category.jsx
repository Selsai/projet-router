import { useParams, useNavigate } from "react-router";

const Category = () => {
  const { categoryId } = useParams();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className="text-center">
      <h1>Catégorie : {categoryId}</h1>
      <button className="btn btn-warning" onClick={handleClick}>
        Retour vers la page d'accueil
      </button>
    </div>
  );
};

export default Category;