import CredicardLogo from "../assets/img/credicard_logo2.png";
import UserHeader from "./UserHeader";
import ContentFooter from "../components/ContentFooter";

const ContentDesktop = ({ content: Content, childrens, footer: Footer }) => {
  return (
    <>
      <Content>
        <div className="d-flex flex-column p-3 mb-2">
          <div className="d-flex flex-row justify-content-between">
            <div className="align-self-start">
              <img
                src={CredicardLogo}
                height="50"
                width="160"
                alt="Credicard"
              />
            </div>

            <UserHeader user="omarjahaziel@unidigital.global" />
          </div>
        </div>
        {childrens}
        <ContentFooter content={Footer} />
      </Content>
    </>
  );
};

export default ContentDesktop;
