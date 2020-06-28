import os
from sanic import Sanic
from sanic import response
from sanic.views import HTTPMethodView

try:
  environment = os.environ['ENV']
except KeyError as e:
  environment = 'PROD'

app = Sanic(__name__)

app.static('/', '/vue_webapp_dist/index.html', name='index.html')
app.static('/js', '/vue_webapp_dist/js')

class EnvView(HTTPMethodView):
  def get(self, request):
    return response.json({'env': environment})

app.add_route(EnvView.as_view(), '/api/env')

@app.route('/hello')
async def home(request):
  return response.text("hello world")


if __name__ == "__main__":
  if environment == 'DEV':
    app.run(host='0.0.0.0', port=8080, debug=True)
  else: # PROD
    app.run(host='0.0.0.0', port=8080, debug=True)