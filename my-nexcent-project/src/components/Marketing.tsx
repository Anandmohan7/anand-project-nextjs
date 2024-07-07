import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "./ui/card";

function Marketing() {
  return (
    <div className="p-10 flex flex-wrap w-full justify-evenly bg-foreground">
      <h1 className="text-primary-heading text-4xl font-bold text-center">
        Caring is the new marketing
      </h1>
      <p className="text-center text-muted mb-10 mt-10">
        The Nexcent blog is the best place to read about the latest membership
        insights, trends and more. See who's joining the community, read about
        how our community are increasing their membership income and lot's more
      </p>
      <div className="flex flex-row gap-8">
        {/* Card 1 */}
        <div className="relative h-[300px]">
          <img
            src="/Marketing1.png"
            alt="Marketing 1"
            className="w-[350px] h-[200px] object-cover rounded-md"
          />
          <div className="absolute bottom-0 left-0 w-full">
            <Card className="w-[300px] mx-auto bg-primary-foreground shadow-lg -mt-20">
              <CardHeader className="flex flex-col items-center">
                <CardTitle className="text-center text-md text-muted">
                  Creating Streamlined Safeguarding Processes with One Ren
                </CardTitle>
                <CardDescription className="text-center">
                  <a
                    className="text-secondary-light font-bold text-md flex items-center"
                    href="#"
                  >
                    Read more
                    <img
                      src="/RightGreen.png"
                      className="ml-2"
                      alt="Right Arrow"
                    />
                  </a>
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative h-[300px]">
          <img
            src="/Marketing2.png"
            alt="Marketing 2"
            className="w-[350px] h-[200px] object-cover rounded-md"
          />
          <div className="absolute bottom-0 left-0 w-full">
            <Card className="w-[300px] mx-auto bg-primary-foreground shadow-lg -mt-20">
              <CardHeader className="flex flex-col items-center">
                <CardTitle className="text-center text-md text-muted">
                  What are your safeguarding responsibilities and how can you
                  manage them?
                </CardTitle>
                <CardDescription className="text-center">
                  <a
                    className="text-secondary-light font-bold text-md flex items-center"
                    href="#"
                  >
                    Read more
                    <img
                      src="/RightGreen.png"
                      className="ml-2"
                      alt="Right Arrow"
                    />
                  </a>
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>

        {/* Card 3 */}
        <div className="relative h-[300px]">
          <img
            src="/Marketin3.png"
            alt="Marketing 2"
            className="w-[350px] h-[200px] object-cover rounded-md"
          />
          <div className="absolute bottom-0 left-0 w-full">
            <Card className="w-[300px] mx-auto bg-primary-foreground shadow-lg -mt-20">
              <CardHeader className="flex flex-col items-center">
                <CardTitle className="text-center text-md text-muted">
                  What are your safeguarding responsibilities and how can you
                  manage them?
                </CardTitle>
                <CardDescription className="text-center">
                  <a
                    className="text-secondary-light font-bold text-md flex items-center"
                    href="#"
                  >
                    Read more
                    <img
                      src="/RightGreen.png"
                      className="ml-2"
                      alt="Right Arrow"
                    />
                  </a>
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Marketing;
