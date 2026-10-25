import axios from 'axios';
const API_URL=import.meta.env.VITE_API_URL||'';
export const apiClient=axios.create({baseURL:`${API_URL}/api`,withCredentials:true});
export async function api(path,options={}){const body=options.body instanceof FormData?options.body:typeof options.body==='string'?JSON.parse(options.body):options.body;try{const response=await apiClient({url:path,method:options.method||'GET',data:body,headers:options.headers});return response.data;}catch(error){throw new Error(error.response?.data?.error||error.message||'Request failed');}}
export const exportRowsToCsv=(rows,filename)=>{const keys=Object.keys(rows[0]||{});const csv=[keys.join(','),...rows.map(row=>keys.map(key=>JSON.stringify(row[key]??'')).join(','))].join('\n');const link=document.createElement('a');link.href=URL.createObjectURL(new Blob([csv],{type:'text/csv'}));link.download=filename;link.click();};
