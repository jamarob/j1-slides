import React from "react";
import { render } from "react-dom";

import { MDXProvider } from "@mdx-js/react";

import {
  Deck,
  FlexBox,
  Slide,
  Box,
  Progress,
  FullScreen,
  Notes,
  mdxComponentMap,
} from "spectacle";

// SPECTACLE_CLI_MDX_START
import slides, { notes } from "./slides.mdx";
// SPECTACLE_CLI_MDX_END

const Presentation = () => (
  <MDXProvider components={mdxComponentMap}>
    <Deck loop template={template}>
      {slides
        .map((MDXSlide, i) => [MDXSlide, notes[i]])
        .map(([MDXSlide, MDXNote], i) => (
          <Slide key={`slide-${i}`} slideNum={i}>
            <MDXSlide />
            <Notes>
              <MDXNote />
            </Notes>
          </Slide>
        ))}
    </Deck>
  </MDXProvider>
);

render(<Presentation />, document.getElementById("root"));
