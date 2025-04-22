import { Formik, Form, Field } from "formik"
import css from '../../pages/MoviesPage/MoviesPage.module.css'
//


const SearchBar = ({ fun }) => {
    
    const initialValues = {
            query: '',
        }
    
    const handleSubmit = (values, options) => {
        const v = values.query.trim().toLowerCase()
        fun(v)
        options.resetForm();
        }
    

return ( 
<div> 
        <Formik onSubmit={handleSubmit} initialValues={initialValues}>
            <Form className={css.form}>
                <Field className={css.field} name='query' placeholder='your query'/>
                <button className={css.btn} type='submit'>Search</button>
               
            </Form>
        </Formik>
        </div>
)

}


export default SearchBar;