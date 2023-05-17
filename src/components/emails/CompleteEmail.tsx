import {
  Mjml,
  MjmlBody,
  MjmlButton,
  MjmlColumn,
  MjmlImage,
  MjmlSection,
  MjmlText,
  MjmlWrapper,
} from "mjml-react";

export default function CompletedEmail({ url }: { url: string }): JSX.Element {
  return (
    <Mjml>
      <MjmlBody width={500}>
        <MjmlWrapper>
          <MjmlSection>
            <MjmlColumn>
              <MjmlImage
                padding="12px 0 24px"
                width="70px"
                height="70px"
                align="center"
                src="https://aivatar.studio/favicon.png"
              />
              <MjmlText fontWeight={800} fontSize={20} align="center">
                Your AIvatar Login Link
              </MjmlText>
            </MjmlColumn>
          </MjmlSection>
          <MjmlSection>
            <MjmlColumn>
              <MjmlText>
                Your studio is complete! You can now access it by clicking the button below.
              </MjmlText>
              <MjmlButton
                  href={`${process.env.NEXTAUTH_URL}/studio/${url}`}
                  width="100%"
                  fontWeight={800}
                  fontSize={16}
                  align="left"
                  backgroundColor="#B5FFD9"
                  color="#415C4E"
                >
                  Open Studio
              </MjmlButton>
              <MjmlText>
                If you did not request this email, you can safely ignore it.
              </MjmlText>
            </MjmlColumn>
          </MjmlSection>
        </MjmlWrapper>
      </MjmlBody>
    </Mjml>
  );
}
