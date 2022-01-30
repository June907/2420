from rest_framework.views import exception_handler


def custom_exception_handler(exc, context):
    # Call REST framework's default exception handler first,
    # to get the standard error response.
    response = exception_handler(exc, context)

    # Now add the HTTP status code to the response.
    if response is not None:
        if 'detail' in response.data:
            response.data['message'] = response.data['detail']
            del response.data['detail']
        if 'username' in response.data:
            response.data['message'] = response.data['username'][0]
            del response.data['username']
        if 'email' in response.data:
            response.data['message'] = response.data['email'][0]
            del response.data['email']
        if 'password' in response.data:
            response.data['message'] = response.data['password'][0]
            del response.data['password']
        if 'name' in response.data:
            response.data['message'] = response.data['name'][0]
            del response.data['name']
        if 'non_field_errors' in response.data:
            response.data['message'] = response.data['non_field_errors'][0]
            del response.data['non_field_errors']

    return response
