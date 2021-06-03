const db = uniCloud.database()
//运行在云端（服务器端）的函数
exports.main = async (event, context) => {
	const collection = db.collection('user')
	
	const res = await collection.where({
		name:'vue-test'
	}).get();
	console.log(JSON.stringify(res));
	
	return {
		code:200,
		msg:'查询成功',
		data:res.data
	}
};
