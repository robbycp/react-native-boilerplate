export interface ScreenFormViewProps {
  formText: string;
  formDate: Date;
  formTime: Date;
  setFormText: React.Dispatch<React.SetStateAction<string>>;
  setFormDate: React.Dispatch<React.SetStateAction<Date>>;
  setFormTime: React.Dispatch<React.SetStateAction<Date>>;
}
