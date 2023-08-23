/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useDisclosure } from '@mantine/hooks';
import { Drawer, Group, Button } from '@mantine/core';
import { useEffect, useState } from 'react';
import { Switch } from '@mantine/core';
import { booleanMap } from '@/types/types';

export default function TStyles() {
  const [opened, { open, close }] = useDisclosure(false);
  
  const TstylingOptions = {
      enableEditing:false,
      enableColumnOrdering:false,
      enableBottomToolbar:false,
      enableColumnVirtualization:false,
      enableGlobalFilterModes:true,
      enablePagination:false,
    enablePinning:false,
    enableRowNumbers:false,
    enableColumnResizing:true,
    enableRowVirtualization:true,
}
// eslint-disable-next-line @typescript-eslint/no-unsafe-call
const [checked, setChecked] = useState<any>()
useEffect(() => {
    // setChecked((Object.keys(TstylingOptions).map(x => console.log(x))))
    // console.log(checked)
},[])
  return (
    <>
      <Drawer opened={opened} onClose={close} withCloseButton={false}>
{
Object.keys(TstylingOptions).map(opt =>(
<>
    <Switch checked={checked} onLabel="ON" offLabel="OFF"  onChange={(event) => setChecked(event.currentTarget.checked)} label={opt} />
</>
    ))
    }

      </Drawer>

      <Group position="center">
        <Button onClick={open}>Open Drawer</Button>
      </Group>
    </>
  );
}