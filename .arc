@app
begin-app

@http
get /
get /ws

@tables
data
  scopeID *String
  dataID **String
  ttl TTL
