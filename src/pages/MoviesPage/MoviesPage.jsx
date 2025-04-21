import { Field, Formik, Form } from 'formik'
import { useState, useEffect } from 'react'
import { fetchResults } from '../../services/api';
import css from './moviespage.module.css'
import MovieList from "../../components/MovieList/MovieList"

const MoviesPage = ( ) => {

    const [search, setSearch] = useState('')
    const [queryList, setQueryList] = useState ([]);
    
    const initialValues = {
        query: '',
    }

    const handleSubmit = (values, options) => {
        const v = values.query.trim()
        if (!v) {
            alert('error')
            return;}
        setSearch(v);
        options.resetForm();
        }

    useEffect(()=>{
        const getData= async ()=>{
        try {
            const rez = await fetchResults(search)
            setQueryList(rez.data.results)
        } catch (error) {
            console.log(error)
        }}
        getData()
        },[search])

        

    return(
        <>
        <div className={css.box}> 
        <Formik onSubmit={handleSubmit} initialValues={initialValues}>
            <Form className={css.form}>
                <Field className={css.field} name='query' placeholder='your query'/>
                <button className={css.btn} type='submit'>Search</button>
               
            </Form>
        </Formik>
        </div>

       <MovieList queryList={queryList} />
       </>
    )
}

export default MoviesPage;