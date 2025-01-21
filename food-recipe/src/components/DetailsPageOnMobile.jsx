import { useLocation, useNavigate } from "react-router-dom";
import DetailsFoodContainer from "./DetailsFoodContainer";
import { IoArrowBack } from "react-icons/io5";

export default function DetailsPageOnMobile() {
    const navigate = useNavigate();
  const location = useLocation();
  const food = location.state?.food;

  if (!food) {
    console.error("No food data found in location state");
    return <div>No food data available</div>;
  }

  function handleBack (){
    navigate(-1)
  }

  return (
    <div>
      <button className="ml-5  bg-slate-200 rounded-full mt-2 hover:opacity-50" onClick={handleBack} >
        <IoArrowBack className="m-3 " />
      </button>

      <DetailsFoodContainer foodId={food.id} /> 
    </div>
  );
}
