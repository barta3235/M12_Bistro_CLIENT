import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../components/sectiontitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm";


// TODO: add publishable key
const stripePromise= loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK)

const Payment = () => {
    return (
        <div>
            <div>
                <SectionTitle heading="Payment" subHeading="Please pay to eat"></SectionTitle>
            </div>
            <div>
               <Elements stripe={stripePromise}>
                      <CheckOutForm></CheckOutForm>
               </Elements>
            </div>
        </div>
    );
};

export default Payment;