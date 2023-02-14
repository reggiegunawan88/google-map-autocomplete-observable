import { useDispatch } from 'react-redux';
import { setInputKeyword, setAutocompleteOption } from 'store/actions/formAction';

const useAutoselectForm = () => {
  const dispatch = useDispatch();

  const handleKeywordInput = e => {
    const { value } = e.target;
    dispatch(setInputKeyword(value));
  };

  const selectOptions = e => {
    dispatch(setAutocompleteOption(e.target.value ? [e.target.value] : []));
  };

  return {
    handleKeywordInput,
    selectOptions
  };
};

export default useAutoselectForm;
