import React from 'react';

export default function ClientForm({
    onSubmit
}) {
    return (
        <form className='client-form'>

            <input type='text' className='url-input' name='url' placeholder='URL'></input>
            <section>
                <div>
                    <input type='radio' id='get' name='method' value='GET'></input>
                    <label for='get'>GET</label>
                    <input type='radio' id='post' name='method' value='POST'></input>
                    <label for='post'>POST</label>
                    <input type='radio' id='put' name='method' value='PUT'></input>
                    <label for='put'>PUT</label>
                    <input type='radio' id='delete' name='method' value='DELETE'></input>
                    <label for='delete'>DELETE</label>
                </div>
                <button>Submit</button>
            </section>
            <textarea placeholder='Raw JSON Body' name='body'></textarea>
        </form>
    )
}