import {is_informational, is_success, is_redirect, is_client_error,   is_server_error } from '../src'

test('is_informational(100-199)', () => {
    expect(is_informational(100)).toBe(true);
    expect(is_informational(105)).toBe(true);
    expect(is_informational(199)).toBe(true);

    expect(is_informational(99)).toBe(false);
    expect(is_informational(399)).toBe(false);
});


test('is_success(200-299)', () => {
    expect(is_success(200)).toBe(true);
    expect(is_success(205)).toBe(true);
    expect(is_success(299)).toBe(true);

    expect(is_success(199)).toBe(false);
    expect(is_success(399)).toBe(false);
});


test('is_redirect(300-399)', () => {
    expect(is_redirect(300)).toBe(true);
    expect(is_redirect(305)).toBe(true);
    expect(is_redirect(399)).toBe(true);

    expect(is_redirect(299)).toBe(false);
    expect(is_redirect(499)).toBe(false);
});


test('is_client_error(400-499)', () => {
    expect(is_client_error(400)).toBe(true);
    expect(is_client_error(405)).toBe(true);
    expect(is_client_error(499)).toBe(true);

    expect(is_client_error(399)).toBe(false);
    expect(is_client_error(599)).toBe(false);
});


test('is_server_error(500-599)', () => {
    expect(is_server_error(500)).toBe(true);
    expect(is_server_error(505)).toBe(true);
    expect(is_server_error(599)).toBe(true);

    expect(is_server_error(499)).toBe(false);
    expect(is_server_error(699)).toBe(false);
});

