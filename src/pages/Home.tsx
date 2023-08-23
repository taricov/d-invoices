import AppAccess from "@/components/AppAccess";
import { Badge, Container, Text } from "@mantine/core";
// import "./styles.css";

const Home: React.FC = () => {
  // const Home: NextPage = ({data}: InferGetStaticPropsType<typeof getStaticProps>) => {

  return (
    <>
      <Container className="mx-5 !mb-5 mt-32 rounded-lg bg-violet-200/10 py-14 text-center md:mx-3 md:mt-[4rem] lg:mx-auto">
        <Badge className="via- relative bg-gradient-to-r from-violet-900/60 via-slate-300 to-black/50 bg-clip-text px-4 py-1 text-center text-transparent before:absolute before:left-0 before:top-0 before:h-full before:w-full before:rounded-full before:bg-indigo-900 before:bg-opacity-10 before:content-['']">
          Free and Open-Source
        </Badge>
        <Text
          component="h1"
          className="leading-xl bg-gradient-to-r from-violet-700 to-black bg-clip-text text-center text-4xl font-bold text-transparent sm:text-[5rem] sm:leading-[4rem] "
        >
          D-Invoices{" "}
        </Text>
        <Text
          component="h3"
          className="bg-gradient-to-r from-violet-700 to-black bg-clip-text text-center text-xl font-bold text-transparent sm:text-4xl"
        >
          Invoice Manager
        </Text>
        <Text
          component="h6"
          className="m-0 bg-gradient-to-r from-violet-700 to-black bg-clip-text text-center text-sm font-bold text-transparent sm:text-2xl"
        >
          For a better and more convenient ERP experience
        </Text>

        <a
          href="/invoices#grid-view"
          className="duration-400 my-7 inline-flex items-center justify-between rounded-full bg-violet-900/80 px-1 py-1 pr-4 text-sm text-violet-100 transition  hover:bg-violet-900/100"
          role="alert"
        >
          <span className="bg-primary-600 mr-3 rounded-full px-4 py-1.5 text-xs text-white">
            New
          </span>
          <span className="text-sm font-medium">
            Try it Now with a sample data!
          </span>
          <svg
            className="ml-2 h-5 w-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
        </a>

        <div className="mb-8 flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0 lg:mb-16">
          {/* <a
            href="#"
            onClick={}
            className="app-btn inline-flex items-center justify-center px-5 py-3"
          >
            Connect
            <svg
              className="-mr-1 ml-2 h-5 w-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a> */}
          {/* <AppAccess /> */}
          <a
            href="#"
            className="app-btn inline-flex items-center justify-center px-5 py-3 "
          >
            <svg
              className="-ml-1 mr-2 h-5 w-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
            </svg>
            Watch video
          </a>
        </div>
        <div className="mx-3 !mt-10 flex items-center justify-center sm:m-0 ">
          {/* <AppTabs/> */}
        </div>
      </Container>

      {/* <MantineProvider>
        <div className="p-1 shadow fixed top-0 z-50 w-full backdrop-blur">
   <Navbar/>
        </div>

        <Container className="md:mt-[4rem] md:mx-3 lg:mx-auto mt-32 !mb-5 mx-5 text-center bg-violet-200/10 rounded-lg py-14">
        <Badge className="bg-gradient-to-r from-violet-900/60 to-black/50 via-slate-300 text-center text-transparent via- bg-clip-text relative before:content-[''] before:absolute before:top-0 before:left-0 before:rounded-full py-1 px-4 before:bg-indigo-900 before:bg-opacity-10 before:w-full before:h-full">
          Free and Open-Source 
          </Badge>
            <Text component="h1" className="text-center text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-700 to-black">D-Invoices </Text>
            <Text component="h3" className="text-center text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-700 to-black">Invoice Manager 
    </Text>
            <Text component="h6" className="m-0 text-center text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-700 to-black">For a better and more convenient ERP experience</Text>
<div className="flex items-center justify-center !mt-10 sm:m-0 mx-3 ">
  <AppTabs/>
  </div>
        </Container>
        

<GView data={data}/>
        {/* <Container className="">{toggledVal === "tbl" ? <TView /> : <GView />}</Container> */}
    </>
  );
};

export default Home;

// export const getStaticProps: GetStaticProps<any> = async () => {
//   const apikey = "24b476fdd8aa43091e0963ba01b98762155c9dd4"
//   const url = 'https://taricov.daftra.com/v2/api/entity/invoice/list/1'
//   const res = await fetch(url,{
//     method: "GET",
//     headers:{
//       apikey,
//       "content-type": "application/json"
//     }
//   })
//   const data: Response = await res.json();
//   // console.log(data)
//   return {
//     props: data
//   }
// }
