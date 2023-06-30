# Teacher API Spec

## Get All Teacher

### Url

```bash
GET /api/teachers
```

### Response Body `Success`:

- 200 OK

```json
{
  "data": [
    {
      "employee_code": "003",
      "employee_name": "Kaesa Lyrih",
      "position": "Guru Jaringan dan Komputer"
    },
    {
      "employee_code": "db89827e",
      "employee_name": "Farhan Taqi",
      "position": "Guru Penjas"
    }
  ]
}
```

## Create Teacher

### Url

```bash
POST /api/teachers
```

### Request Body:

```json
{
  "employee_code": "003",
  "employee_name": "Kaesa Lyrih",
  "position": "Guru Jaringan"
}
```

### Response Body `Success`:

- 200 OK

```json
{
  "data": {
    "employee_code": "003",
    "employee_name": "Kaesa Lyrih",
    "position": "Guru Jaringan"
  }
}
```

### Response Body `Failed`:

- 400 Bad Request

```json
{
  "error": "kode pegawai mungkin sudah digunakan"
}
```

## Get Teacher

### Url

```bash
GET /api/teachers/[id]
```

- [id] = `employee_code`

example:

```bash
GET /api/teachers/003
```

### Response Body `Success`:

- 200 OK

```json
{
  "data": {
    "employee_code": "003",
    "employee_name": "Kaesa Lyrih",
    "position": "Guru Jaringan"
  }
}
```

### Response Body `Failed`:

- 400 Bad Request

```json
{
  "error": "error message"
}
```

## Update Teacher

### Url

```bash
PUT /api/teachers/[id]
```

- [id] = `employee_code`

example:

```bash
PUT /api/teachers/003
```

### Request Body:

```json
{
  "employee_code": "003",
  "employee_name": "Kaesa Lyrih",
  "position": "Guru Jaringan dan Komputer"
}
```

### Response Body `Success`:

- 200 OK

```json
{
  "data": {
    "employee_code": "003",
    "employee_name": "Kaesa Lyrih",
    "position": "Guru Jaringan dan Komputer"
  }
}
```

### Response Body `Failed`:

- 400 Bad Request

```json
{
  "error": "error message"
}
```

## Delete Teacher

### Url

```bash
DELETE /api/teachers/[id]
```

- [id] = `employee_code`

example:

```bash
DELETE /api/teachers/003
```

### Response Body `Success`:

- 200 OK

```json
{
  "message": "Berhasil menghapus pegawai"
}
```

### Response Body `Failed`:

- 400 Bad Request

```json
{
  "error": "error message"
}
```
