import request from '@/api/request'
function findAllPermissions() {
  return request({
    url: `/admin/sysAuth/permission/findAllPermissions`,
    method: 'get',
  })
}
function findRolesByPage(start, limit) {
  return request({
    url: `/admin/sysAuth/role/findRolesByPage/${start}/${limit}`,
    method: 'get',
  })
}
function removeRole(id) {
  return request({
    url: `/admin/sysAuth/role/removeRole/${id}`,
    method: 'delete',
  })
}

function saveRolePermissions(data) {
  return request({
    url: `/admin/sysAuth/role/saveRolePermissions`,
    method: 'POST',
    data
  })
}

function updateRolePermissions(data) {
  return request({
    url: `/admin/sysAuth/role/updateRolePermissions`,
    method: 'PUT',
    data
  })
}
function findAllRoles() {
  return request({
    url: `/admin/sysAuth/role/findAllRoles`,
    method: 'get'
  })
}
function getRolePermissions(id) {
  return request({
    url: `/admin/sysAuth/role/findRolePermissions/${id}`,
    method: 'get'
  })
}


export {
  findAllPermissions,
  findRolesByPage,
  removeRole,
  saveRolePermissions,
  updateRolePermissions,
  findAllRoles,
  getRolePermissions
}