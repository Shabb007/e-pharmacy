import styled from "styled-components";
import {
  DescriptionDetailButton,
  DescriptionDetailButtonActive,
  DescriptionDetailDescription,
  DescriptionDetailList,
  DescriptionDetailListItem,
  DescriptionDetailSubtitle,
  DescriptionDetailTitleSpan,
  DescriptionDetailWrapper,
  DescriptionDetailWrapperButton,
} from "./DescriptionDetail.styled";

const DescriptionDetail = () => {
  const clic = () => {};

  return (
    <DescriptionDetailWrapper>
      <DescriptionDetailWrapperButton>
        <DescriptionDetailButton onClick={clic}>
          Description
        </DescriptionDetailButton>
        <DescriptionDetailButtonActive>Reviews</DescriptionDetailButtonActive>
      </DescriptionDetailWrapperButton>
      <DescriptionDetailDescription>
        Although it's typically considered safe, excessive consumption can lead
        to side effects. Therefore, it's recommended to consult a healthcare
        professional before using moringa, especially if you're pregnant,
        nursing, or taking other medications. This balanced approach allows for
        the benefits of moringa while recognizing the importance of proper usage
        and caution.
      </DescriptionDetailDescription>
      <DescriptionDetailList>
        <DescriptionDetailListItem>
          <DescriptionDetailTitleSpan>
            Medicinal Uses: Antioxidant Properties:
          </DescriptionDetailTitleSpan>
          <DescriptionDetailSubtitle>
            Moringa is packed with antioxidants that help fight oxidative stress
            and inflammation in the body.
          </DescriptionDetailSubtitle>
        </DescriptionDetailListItem>

        <DescriptionDetailListItem>
          <DescriptionDetailTitleSpan>
            Anti-Diabetic Effects:
          </DescriptionDetailTitleSpan>
          <DescriptionDetailSubtitle>
            Some studies have shown that moringa leaves might lower blood sugar
            levels, making it a valuable supplement for managing diabetes.
          </DescriptionDetailSubtitle>
        </DescriptionDetailListItem>

        <DescriptionDetailListItem>
          <DescriptionDetailTitleSpan>Heart Health:</DescriptionDetailTitleSpan>
          <DescriptionDetailSubtitle>
            The plant has been linked to reduced cholesterol levels, which is
            vital for heart health.
          </DescriptionDetailSubtitle>
        </DescriptionDetailListItem>

        <DescriptionDetailListItem>
          <DescriptionDetailTitleSpan>
            Anti-Cancer Properties:
          </DescriptionDetailTitleSpan>
          <DescriptionDetailSubtitle>
            Certain compounds in moringa, such as niazimicin, have been found to
            suppress the growth of cancer cells in laboratory studies.
          </DescriptionDetailSubtitle>
        </DescriptionDetailListItem>

        <DescriptionDetailListItem>
          <DescriptionDetailTitleSpan>
            Immune Support:
          </DescriptionDetailTitleSpan>
          <DescriptionDetailSubtitle>
            With its high vitamin C content, moringa can boost the immune
            system.
          </DescriptionDetailSubtitle>
        </DescriptionDetailListItem>

        <DescriptionDetailListItem>
          <DescriptionDetailTitleSpan>
            Digestive Aid:
          </DescriptionDetailTitleSpan>{" "}
          <DescriptionDetailSubtitle>
            {" "}
            Moringa can help in treating digestive disorders due to its
            anti-inflammatory properties.
          </DescriptionDetailSubtitle>
        </DescriptionDetailListItem>
      </DescriptionDetailList>
    </DescriptionDetailWrapper>
  );
};

export default DescriptionDetail;
