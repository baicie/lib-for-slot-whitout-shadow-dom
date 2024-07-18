import register from "preact-custom-element";

function TextSection({ heading, content2, content }) {
  console.log(heading, content, content2);

  return (
    <div>
      <h1>{heading}</h1>
      <p>{content2}</p>
      <h2>{content}</h2>
    </div>
  );
}

register(TextSection, "text-section", ["heading", "content2", "content"], {
  shadow: false,
  mode: "open",
});
