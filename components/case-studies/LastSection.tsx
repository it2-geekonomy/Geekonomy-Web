import React from "react";
import Button from "@/components/ui/Button";
import { Typography } from "../ui/Typography";

const LastSection: React.FC = () => {
  return (
    <>
<div className="flex flex-col items-center text-center">
    <Typography
          as="p"
          variant="2xl"
          className="text-[clamp(1.15rem,2.5vw,2.5rem)] text-white font-semibold mt-3"
        >
          <span>Inspired by our work? Lets build your</span>
          <br />
          <span>brand legacy together.</span>
        </Typography>

<Button href="/contact" variant="primary" 
 className="mt-4 md:mt-8 mx-auto block text-[clamp(0.7rem,1.5vw,1.1rem)] normal-case mb-4">
  Contact Us
</Button>
</div>
</>
  );
};

export default LastSection;