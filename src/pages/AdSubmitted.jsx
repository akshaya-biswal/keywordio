import { Modal, ModalDialog, Typography } from "@mui/joy";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function AdSubmitted() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 6000);
  }, [navigate]);

  return (
    <>
      <div>AdSubmitted</div>
      <Modal open={true}>
        <ModalDialog>
          <Typography>Submitted</Typography>
        </ModalDialog>
      </Modal>
    </>
  );
}
