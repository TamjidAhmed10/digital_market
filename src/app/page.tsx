import { Button, buttonVariants } from "@/components/ui/button";
import MaxWidthWrapper from "@/components/wrappers/MaxWidthWrapper";
import { ArrowDownToLine, CheckCircle, Leaf } from "lucide-react";
import Link from "next/link";

const perks = [
  {
    name: "Instant Delevary",
    Icon: ArrowDownToLine,
    description:
      "Get your assets delivered to you email in seconds and download them right away.",
  },
  {
    name: "Guaranteed Quality",
    Icon: CheckCircle,
    description:
      "Every asset on our platform is verified by our teams . So that you get the highest quality.",
  },
  {
    name: "For the Planet",
    Icon: Leaf,
    description:
      "We've pledge 1% of sales to the preservation and restoration of the nature. ",
  },
];
export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <div className=" py-20 mx-auto text-center flex flex-col items-center max-w-3xl ">
          <h1 className=" text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Your marketplace for high quality{" "}
            <span className=" text-primary ">digital asset</span>
          </h1>
          <p className=" mt-6 text-lg max-w-porse text-muted-foreground">
            Welcome to AssetParadise. Every asset on our platform is verified by
            our team to maintain highest quality possible.
          </p>
          <div className=" flex flex-col sm:flex-row gap-4 mt-6">
            <Link href={"/products"} className={buttonVariants()}>
              Browse Trending
            </Link>
            <Button variant={"ghost"}>Our Quality Promise &rarr;</Button>
          </div>
        </div>
        {/* TODO: List Products */}
      </MaxWidthWrapper>
      <section className=" border-t border-gray-200 bg-gray-50">
        <MaxWidthWrapper className=" py-20 ">
          <div className=" grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0 ">
            {perks.map((perk) => {
              return (
                <div
                  key={perk.name}
                  className=" text-center md:flex md:items-start md:text-left lg:block lg:text-center"
                >
                  <div className=" md:flex-shrink-0 flex justify-center">
                    <div className=" flex  justify-center md:flex-shrink-0 ">
                      <div className=" h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-900">
                        {<perk.Icon className=" w-1/3 h-1/3" />}
                      </div>
                    </div>
                  </div>
                  <div className=" mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6 ">
                    <h3 className=" text-base font-medium text-gray-900">
                      {perk.name}
                    </h3>
                    <div className=" mt-3 text-sm text-muted-foreground">
                      {perk.description}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
}
