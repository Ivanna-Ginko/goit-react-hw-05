import { Field, Formik, Form } from 'formik'


const SearchBar = ({ handleChangeQuery }) => {
    const initialValues = {
        query: '',
    }

    const handleSubmit = (values, options) => {
        const v = values.query.trim()
        if (!v) {
            
            alert('error')
            return;
        }
     console.log(values);
     handleChangeQuery(v)
     options.resetForm();
    }

    return(
        <header > 
        <Formik onSubmit={handleSubmit} initialValues={initialValues}>
            <Form >
                <Field name='query' placeholder='your query'/>
                <button type='submit'>Search</button>
               
            </Form>
        </Formik>
        </header>
    )
}

export default SearchBar;