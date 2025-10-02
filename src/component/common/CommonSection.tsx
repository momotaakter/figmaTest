
import { H1, Paragraph } from "../Typography";

import { Button } from "../Typography";

interface CommonProps {
  readonly heading: string;
  readonly text: string;
  readonly btn: string;
}

export default function Common({ heading, text,btn }: CommonProps) {
  return (
    <div className="max-w-2xl mx-auto py-6 text-center">
     
<Button>{btn}</Button>
<H1>{heading}</H1>
<Paragraph>{text}</Paragraph>



    </div>
  );
}
