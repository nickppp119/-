import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Tooltip from '@mui/material/Tooltip';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


const ProSpan = styled('span')({
  display: 'inline-block',
  height: '1em',
  width: '1em',
  verticalAlign: 'middle',
  marginLeft: '0.3em',
  marginBottom: '0.08em',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  backgroundImage: 'url(https://mui.com/static/x/pro.svg)',
});

const Label = ({ componentName, valueType, isProOnly }) => {
  const content = (
    <span>
      <strong>{componentName}</strong> for {valueType} editing
    </span>
  );

  if (isProOnly) {
    return (
      <Stack direction="row" spacing={0.5} component="span">
        <Tooltip title="Included on Pro package">
          <a
            href="https://mui.com/x/introduction/licensing/#pro-plan"
            aria-label="Included on Pro package"
          >
            <ProSpan />
          </a>
        </Tooltip>
        {content}
      </Stack>
    );
  }

  return content;
}

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <Button onClick={() => navigate('user')}>使用者設定</Button>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer
          components={[
            'DatePicker',
            'TimePicker',
            'DateTimePicker',
            'DateRangePicker',
          ]}
        >
          <DemoItem label={<Label componentName="DatePicker" valueType="date" />}>
            <DatePicker />
          </DemoItem>
        </DemoContainer>
      </LocalizationProvider>
      <Box
        height={200}
        width="50%"
        my={4}
        display="flex"
        alignItems="center"
        gap={4}
        sx={{ border: '2px solid grey' }}
      >
        This Box uses MUI System props for quick customization.
      </Box>
    </>
  );
}


export default Home;