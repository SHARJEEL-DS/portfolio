import React from "react";
import { DiFirebase, DiReact, DiZend } from "react-icons/di";
import { AiOutlineTool } from "react-icons/ai";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with the following technologies in the AI world. Now I'm focused towards models and deploy.
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="6rem" />
        </picture>
        <ListContainer>
          <ListTitle>image processing</ListTitle>
          <ListParagraph>
            Experience with <br />
            CNN , python , ANN 
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="6rem" />
        </picture>
        <ListContainer>
          <ListTitle>Generative AI </ListTitle>
          <ListParagraph>
            Experience with <br />
            GAN and its type
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
      </ListItem>
      <ListItem>
        <picture>
          <AiOutlineTool size="5.5rem" />
        </picture>
        <ListContainer>
          <ListTitle>Other Tools</ListTitle>
          <ListParagraph>
            Experience with <br />
            html css, react, Git
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
