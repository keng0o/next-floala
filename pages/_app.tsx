import React, { useState } from "react";
import { render } from "react-dom";
import Head from "next/head";
import FroalaEditor from "react-froala-wysiwyg";
import Froala from "froala-editor";
import "froala-editor/js/froala_editor.pkgd.min.js";
import "froala-editor/js/plugins.pkgd.min.js";
// Require Editor CSS files.
import fStyle1 from "froala-editor/css/froala_style.min.css";
import fStyle2 from "froala-editor/css/froala_editor.pkgd.min.css";

const App = () => {
  const [htmlEditorModel, setHtmlEditorModel] = useState("");
  const froalaConfig = {};
  return (
    <div>
      <style dangerouslySetInnerHTML={{ __html: fStyle1 }} />
      <style dangerouslySetInnerHTML={{ __html: fStyle2 }} />
      <Head>
        <title>Trying out next.js</title>
      </Head>
      <FroalaEditor
        tag="textarea"
        config={froalaConfig}
        model={htmlEditorModel}
      />
      <style jsx>{`
        .boxed {
          border: 1px solid grey;
          border-radius: 8px;
          padding: 0 12px;
        }
        @media (max-width: 600px) {
          .boxed {
            background: lightblue;
          }
        }
      `}</style>
    </div>
  );
};
render(<App />, document.getElementById("root"));


export default App
