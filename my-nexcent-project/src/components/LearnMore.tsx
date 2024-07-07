import { Button } from "./ui/button";

function LearnMore() {
  return (
    <div className="flex items-center w-full p-10 space-x-8 bg-foreground">
      <div className="w-1/3">
        <img src="/LearnMore.png" className="w-full h-auto" />
      </div>
      <div className="w-2/3 flex flex-col space-y-4">
        <h1 className="text-4xl font-bold max-w-l mr-10 text-primary-heading">
          The unseen of spending three years at Pixelgrade
        </h1>
        <p className="max-w-l text-muted">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <div>
          <Button className="pr-10 pl-10 bg-secondary-light">Learn More</Button>
        </div>
      </div>
    </div>
  );
}

export default LearnMore;
