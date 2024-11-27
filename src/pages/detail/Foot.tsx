import { DetailProps } from "./Head";
import xss from "xss";

const Foot = ({ data }: DetailProps) => {
  return (
    <div>
      <div className="flex flex-col gap-2 text-white">
        <div className="flex gap-2">
          <button className="bg-black flex-1 p-4 rounded-lg">
            Add to Cart
          </button>

          <button className="bg-black p-4 rounded-lg">
            <img src="/heart.svg" />
          </button>
        </div>

        <button className="bg-blue-500 p-4 rounded-lg">Buy It Now</button>
      </div>

      <div>
        <h2 className="font-semibold mt-8 mb-2 text-[24px] text-gray-950">
          About the product
        </h2>
        {/* apiden gelen html içeriğini reactta ekrana basmak için "dangerouslySetInnerHTML" propunu kullanırız
         * xss kütüphanesi ile html içindeki, zaralı olabilcek scriptleri bozarak bu yöntemi kullandığımızda bir tehlike kalmaz
         */}
        <p
          className="font-open text-[18px] text-gray-950"
          dangerouslySetInnerHTML={{ __html: xss(data.description) }}
        ></p>
      </div>
    </div>
  );
};

export default Foot;
