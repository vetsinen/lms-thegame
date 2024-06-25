from flask import Flask, render_template, request, session, redirect, url_for, jsonify

app = Flask(__name__)
app.secret_key = 'LETMESTYLE_214_SECRET_KEY'

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/index2')
def index2():
    return render_template('index2.html')

@app.post('/set_wallet')
def set_wallet():
        # Save the form data to the session object
        data = request.get_json()  # Get JSON data from request body
        text = data.get('text')
        print(f'Received content: {text}')
        mnemo = generate_cusom_mnemo(text)
        if not mnemo:
            return jsonify({'status':'error','message': 'text is to short'})
        session['words'] = mnemo
        return jsonify({'status':'ok','message': 'text processe successfully'})

@app.route('/logout')
def logout():
    # Clear words stored in the session object
    session.pop('words', default=None)
    return redirect('/')