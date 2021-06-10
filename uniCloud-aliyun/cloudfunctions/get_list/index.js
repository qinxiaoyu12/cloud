const db = uniCloud.database()
//运行在云端（服务器端）的函数
exports.main = async (event, context) => {
	const collection = db.collection('user')
	
	const list = await db.collection('article')
	.field({
		//true只返回这个字段，false不返回这个字段
		content:false
	})
	.get()
	
	return {
		code:200,
		msg:'数据请求成功',
		data:list.data
	}
};
