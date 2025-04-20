import { Field, Formik, Form } from 'formik'
import { useState } from 'react'
import { fetchResults } from '../../services/api';
import css from './moviespage.module.css'

const SearchBar = ( ) => {

    
    const [searchValues, setSearchValues] = useState('');

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
        getData();
        handleChangeQuery(v)
        options.resetForm();
       }
    
       const getData = async () => {
        try {
            const rez = await fetchResults(searchValues);
            console.log(rez.data)
            
        } catch (error) {
            console.log(error);
        }      
        }

        const handleChangeQuery = newValue => {
            setSearchValues(newValue);
        }
         
            


    return(
        <div className={css.box}> 
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