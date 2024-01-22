import os
import sys
from http.server import SimpleHTTPRequestHandler, HTTPServer

class CustomHandler(SimpleHTTPRequestHandler):
    def guess_type(self, path):
        if path.endswith(('.js', '.ts', '.html', '.css', '.json', '.log', '.py', '.txt', '.jsx', '.tsx')):
            return 'text/plain; charset=utf-8'
        return SimpleHTTPRequestHandler.guess_type(self, path)

def run(server_class=HTTPServer, handler_class=CustomHandler, directory=None, port=8000):
    server_address = ('', port)
    httpd = server_class(server_address, handler_class)
    if directory:
        os.chdir(directory)
    print(f'Server running at http://localhost:{port}/ serving {directory or os.getcwd()}')
    httpd.serve_forever()

if __name__ == '__main__':
    directory = sys.argv[1] if len(sys.argv) > 1 else None
    port = int(sys.argv[2]) if len(sys.argv) > 2 else 8000
    run(directory=directory, port=port)
