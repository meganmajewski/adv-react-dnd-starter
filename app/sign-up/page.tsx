import Header from "@/components/Header";
import { Button, Stack, TextField } from "@mui/material";

const signUp = () => {
  return (
    <div>
      <Header />
      <form>
        <Stack>
          <TextField label="Full Name" />
          <TextField label="email" />
          <Button>Sign Up</Button>
        </Stack>
      </form>
    </div>
  );
};

export default signUp;
