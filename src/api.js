const RootUrl = '/csgx';
module.exports = {


	QueryProjectList: `${RootUrl}/project/queryProjectList`, //获取基本信息
	QueryProjectId: `${RootUrl}/project/queryProjectId`, //获取基本信息详情
	GetMainProcess: `${RootUrl}/process/getMainProcess`, //主进程tab
	GetChildProcess: `${RootUrl}/process/getChildProcess`, //子进程tab
	GetFileListByNodeId: `${RootUrl}/process/getFileListByNodeId`, //根据节点查询附件列表
	UploadFile: `${RootUrl}/file/uploadFile`, //上传附件
	DownloadFile: `${RootUrl}/file/downloadFile`, //文件下载
	GetFileListByNodeIdTmp: `${RootUrl}/process/getFileListByNodeIdTmp`, //根据节点查询需要上传的模板文件
	GetReverseFlowResult: `${RootUrl}/process/getReverseFlowResult`, //根据项目id查询工程是否逆流程
	GetReverseFlowNode: `${RootUrl}/process/getReverseFlowNode`, //根据项目id查询工程是否逆流程
	GetReverseByProject: `${RootUrl}/process/getReverseByProject`, //流程监督接口
	CleanFileByfileId: `${RootUrl}/file/cleanFileByfileId`, //文件删除接口
	
}