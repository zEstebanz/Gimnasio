export default function handler(req, res){
    return res.status(200).json(`buscando usuario: ${req.query.id}`);
}