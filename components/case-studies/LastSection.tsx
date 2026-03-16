import React from "react";
import Button from "@/components/ui/Button";
import { Typography } from "../ui/Typography";

const LastSection: React.FC = () => {
  return (
    <>
      <div className="flex flex-col items-center text-center">
        <Typography
          as="p"
          variant="display-xl"
          className="text-white font-semibold mt-3"
        >
          {/* Desktop (lg and up): keep explicit line break */}
          <span className="hidden lg:inline">
            Inspired by our work? Lets build your
            <br />
            brand legacy together.
          </span>

          {/* Below lg: single sentence, natural wrapping into ~two lines */}
          <span className="block lg:hidden">
            Inspired by our work? Lets build your brand legacy together.
          </span>
        </Typography>

        <Button href="/contact-us" variant="primary"
          className="mt-4 md:mt-8 normal-case mb-4">
          Contact Us
        </Button>
      </div>
    </>
  );
};

export default LastSection;