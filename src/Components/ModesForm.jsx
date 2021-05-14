import { Field, Form, Formik } from "formik"
import { memo } from "react"

export const ModesForm = memo(({ modes, setSize, setHovered }) => {
    const submit = (values, { setSubmitting }) => {
        // Reseting
        setSize(0)
        setHovered([])
        setSize(+values.modes)
        setSubmitting(false)
    }

    return <div className={'form'}>
        <Formik
            enableReinitialize
            initialValues={{ modes: modes[0].mode }}
            onSubmit={submit}
        >
            {({ isSubmitting }) => (
                <Form>
                    <Field as="select" name="modes">
                        {modes.map(el => <option key={el.key} value={el.mode}>{el.key}</option>)}
                    </Field>
                    <button className={'button'} type="submit" disabled={isSubmitting}>Start</button>
                </Form>
            )}
        </Formik>
    </div>
})