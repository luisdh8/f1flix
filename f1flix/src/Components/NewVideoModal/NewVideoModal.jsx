import React, { useState } from "react";
import { 
  Dialog, 
  DialogTitle, 
  DialogContent,
  TextField,
  Button,
  IconButton,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Stack,
  Box
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useVideoContext } from "../../Contexts/VideoContext";

const NewVideoModal = ({ isOpen, onClose }) => {
  const { addVideo } = useVideoContext();
  const [formData, setFormData] = useState({
    titulo: "",
    categoria: "",
    img: "",
    video: "",
    descricao: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addVideo(formData);
    handleReset();
    onClose();
  };

  const handleReset = () => {
    setFormData({
      titulo: "",
      categoria: "",
      img: "",
      video: "",
      descricao: "",
    });
  };

  const categories = [
    "Highlights", "Race", "Interviews", "Incidents", "Grill the Grid", 
    "Funny", "Tech Talk", "Stories", "Drama", "Pure F1"
  ];

  return (
    <Dialog 
      open={isOpen} 
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          bgcolor: '#131442', // secondary color
          color: '#F5F5F5',  // text color
          borderRadius: '16px', // Border radius for the modal
          border: '0.125px solid #E74C3C', // Border color for the modal
        }
      }}
    >
      <DialogTitle sx={{ m: 0, p: 2, color: '#F5F5F5' }}>
        Add New Video
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: '#F5F5F5',
            '&:hover': {
              color: '#E74C3C', // primaryHover color
            }
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
          <Stack spacing={3}>
            <TextField
              name="titulo"
              label="Title"
              value={formData.titulo}
              onChange={handleChange}
              required
              fullWidth
              variant="outlined"
              sx={{
                '& .MuiOutlinedInput-root': {
                  backgroundColor: '#080920', // background color
                  '& fieldset': { borderColor: '#0c0d2d' }, // primary color
                  '&:hover fieldset': { borderColor: '#E74C3C' }, // primaryHover color
                  '&.Mui-focused fieldset': { borderColor: '#E74C3C' }, // primaryHover color
                },
                '& label': { 
                  color: '#F5F5F5',
                  '&.Mui-focused': { color: '#E74C3C' }
                },
                '& input': { color: '#F5F5F5' }
              }}
            />

            <FormControl fullWidth required>
              <InputLabel sx={{ 
                color: '#F5F5F5',
                '&.Mui-focused': { color: '#E74C3C' }
              }}>
                Category
              </InputLabel>
              <Select
  name="categoria"
  value={formData.categoria}
  onChange={handleChange}
  label="Category"
  MenuProps={{
    PaperProps: {
      sx: {
        backgroundColor: '#131442', // Using secondary color for dropdown background
        '& .MuiMenu-list': {
          padding: 0,
        },
      },
    },
  }}
  sx={{
    backgroundColor: '#080920',
    color: '#F5F5F5',
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: '#0c0d2d'
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: '#E74C3C'
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: '#E74C3C'
    }
  }}
>
  {categories.map((category) => (
    <MenuItem 
      key={category} 
      value={category} 
      sx={{
        color: '#F5F5F5', // Making text white for visibility
        '&:hover': {
          backgroundColor: '#0c0d2d'
        },
        '&.Mui-selected': {
          backgroundColor: '#0c0d2d',
          '&:hover': {
            backgroundColor: '#E74C3C'
          }
        }
      }}
    >
      {category}
    </MenuItem>
  ))}
</Select>
            </FormControl>

            <TextField
              name="img"
              label="Image URL"
              value={formData.img}
              onChange={handleChange}
              required
              fullWidth
              variant="outlined"
              sx={{
                '& .MuiOutlinedInput-root': {
                  backgroundColor: '#080920',
                  '& fieldset': { borderColor: '#0c0d2d' },
                  '&:hover fieldset': { borderColor: '#E74C3C' },
                  '&.Mui-focused fieldset': { borderColor: '#E74C3C' },
                },
                '& label': { 
                  color: '#F5F5F5',
                  '&.Mui-focused': { color: '#E74C3C' }
                },
                '& input': { color: '#F5F5F5' }
              }}
            />

            <TextField
              name="video"
              label="Video URL"
              value={formData.video}
              onChange={handleChange}
              required
              fullWidth
              variant="outlined"
              sx={{
                '& .MuiOutlinedInput-root': {
                  backgroundColor: '#080920',
                  '& fieldset': { borderColor: '#0c0d2d' },
                  '&:hover fieldset': { borderColor: '#E74C3C' },
                  '&.Mui-focused fieldset': { borderColor: '#E74C3C' },
                },
                '& label': { 
                  color: '#F5F5F5',
                  '&.Mui-focused': { color: '#E74C3C' }
                },
                '& input': { color: '#F5F5F5' }
              }}
            />

            <TextField
              name="descricao"
              label="Description"
              value={formData.descricao}
              onChange={handleChange}
              required
              fullWidth
              multiline
              rows={4}
              variant="outlined"
              sx={{
                '& .MuiOutlinedInput-root': {
                  backgroundColor: '#080920',
                  '& fieldset': { borderColor: '#0c0d2d' },
                  '&:hover fieldset': { borderColor: '#E74C3C' },
                  '&.Mui-focused fieldset': { borderColor: '#E74C3C' },
                },
                '& label': { 
                  color: '#F5F5F5',
                  '&.Mui-focused': { color: '#E74C3C' }
                },
                '& textarea': { color: '#F5F5F5' }
              }}
            />

            <Stack direction="row" spacing={2} justifyContent="flex-end">
              <Button
                type="button"
                onClick={handleReset}
                variant="outlined"
                sx={{
                  color: '#F5F5F5',
                  borderColor: '#0c0d2d',
                  '&:hover': {
                    borderColor: '#E74C3C',
                    backgroundColor: 'rgba(231, 76, 60, 0.1)'
                  }
                }}
              >
                Reset
              </Button>
              <Button
                type="submit"
                variant="contained"
                sx={{
                  bgcolor: '#0c0d2d',
                  color: '#F5F5F5',
                  '&:hover': {
                    bgcolor: '#E74C3C'
                  }
                }}
              >
                Save Video
              </Button>
            </Stack>
          </Stack>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default NewVideoModal;