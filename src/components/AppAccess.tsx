/* eslint-disable prettier/prettier */
import { useDisclosure } from "@mantine/hooks";
import { useForm } from "@mantine/form";
import {
  Modal,
  Group,
  //   NumberInput,
  TextInput,
  Button,
  Box
  //   Transition
} from "@mantine/core";
// import { useQuery } from "@tanstack/react-query";

// async function connectUser(
//   subdomain: string,
//   apikey: string
// ): Promise<unknown> {
//   const headers = new Headers({
//     "Content-Type": "application/json",
//     Accept: "application/json",
//     apikey
//   });
//   const res = await fetch(
//     "https://" + subdomain + ".daftra.com/api2/site-info",
//     { headers }
//   );
//   return (await res.json()) as unknown;
// }

const AppAccess = (): React.ReactElement => {
  const [opened, { open, close }] = useDisclosure(false);
  const form = useForm({
    initialValues: { subdomain: "", apikey: "" }
  });

  //   const { subdomain, apikey } = form.values;
  //   const { data, isLoading, isError, error, refetch } = useQuery({
  //     queryKey: ["get-access"],
  //     queryFn: () => connectUser(subdomain, apikey),
  //     enabled: false
  //   });
  //   console.log(isLoading, data);

  //   const onSubmit = () => {
  //     refetch;
  //     console.log(subdomain, apikey, data);
  //     if (!isLoading) {
  //       form.reset;
  //       close();
  //     }
  //   };

  const isLoading = false;
  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        title="Connect.."
        classNames={{
          root: "rounded",
          body: "text-white app-grad",
          header: "!text-white app-grad",
          close:
            "!text-white bg-white/10 hover:bg-white/20 transition duration-300"
        }}
        className="rounded !bg-violet-800 !bg-opacity-0 font-medium text-white transition-all duration-300 hover:!bg-opacity-30"
      >
        <Box maw={320} mx="auto">
          <form onSubmit={() => ""}>
            <TextInput
              label=""
              placeholder="Daftra Sub-domain"
              {...form.getInputProps("subdomain")}
              classNames={{
                input:
                  "text-white !transittion-all !duration-400 bg-white/10 placeholder:text-white/60 placeholder:font-normal border-1  !border-violet-100/70 focus:!border-violet-100/100"
              }}
            />
            <TextInput
              label=""
              placeholder="Your API Key"
              {...form.getInputProps("apikey")}
              classNames={{
                input:
                  "text-white my-5 !transittion-all !duration-400 bg-white/10 placeholder:text-white/60 placeholder:font-normal border-1  !border-violet-100/70 focus:!border-violet-100/100"
              }}
            />

            <Button
              disabled={isLoading}
              type="submit"
              mt="sm"
              className="app-btn m-0 !bg-violet-200/10 hover:!bg-violet-200/20"
            >
              {isLoading ? "loading..." : "Submit"}
            </Button>
            {/* <div className="inline-block ml-2">loading...</div> */}
          </form>
        </Box>
      </Modal>

      <Group position="center">
        <Button className="app-btn-connect" onClick={open}>
          Connect
        </Button>
      </Group>
    </>
  );
};

export default AppAccess;
