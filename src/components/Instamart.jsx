import { useState } from "react";
import arrowup from "../assets/arrow-up.png";
import arrowdown from "../assets/arrow-down.png";

const Section = ({ title, description, isVisible, isShow, isHide }) => {
  return (
    <>
      <div className="  my-6 flex items-center justify-between">
        <div>
          <h1
            className="text-xl font-bold my-4 cursor-pointer select-none"
            onClick={isVisible ? isHide : isShow}
          >
            {title}
          </h1>
          {<p>{isVisible && description}</p>}
        </div>
        <div>
          {isVisible ? (
            <button onClick={isHide}>
              <img src={arrowup} alt="img" className="w-10 h-8" />
            </button>
          ) : (
            <button onClick={isShow}>
              <img src={arrowdown} alt="img" className="w-10 h-8" />
            </button>
          )}
        </div>
      </div>
    </>
  );
};

const Instamart = () => {
  const [showSection, setShowSection] = useState("about");
  return (
    <>
      <h1 className="text-3xl font-bold mt-8">Frequently Asked Questions</h1>
      <Section
        title="What payment methods do you accept?"
        description="We accept a variety of payment methods including credit/debit cards, mobile wallets, and cash on delivery (where available). You can select your preferred payment option at checkout."
        isVisible={showSection === "about"}
        isShow={() => setShowSection("about")}
        isHide={() => setShowSection(false)}
      />
      <Section
        title="How can I track my order?"
        description="Once your order is placed, you can track its status in real-time through the app. You'll receive updates when your order is confirmed, being prepared, and out for delivery"
        isVisible={showSection === "team"}
        isShow={() => setShowSection("team")}
        isHide={() => setShowSection(false)}
      />
      <Section
        title="What should I do if my order is incorrect or missing items?"
        description="If your order is incorrect or missing items, please contact our customer support team immediately through the app. We will work with the restaurant to resolve the issue and ensure you receive the correct items."
        isVisible={showSection === "products"}
        isShow={() => setShowSection("products")}
        isHide={() => setShowSection(false)}
      />
      <Section
        title="How can I provide feedback about my experience?"
        description="Your feedback is important to us. After completing your order, you can rate your experience and provide comments through the app. If you have specific concerns or suggestions, you can also contact our customer support team directly."
        isVisible={showSection === "feedback"}
        isShow={() => setShowSection("feedback")}
        isHide={() => setShowSection(false)}
      />
      <Section
        title="How do I contact customer support?"
        description="If you need assistance, you can contact our customer support team through the app by going to the help section. You can also reach us via email at doondelights@support.com or on social media Doon Delights"
        isVisible={showSection === "support"}
        isShow={() => setShowSection("support")}
        isHide={() => setShowSection(false)}
      />
    </>
  );
};

export default Instamart;
