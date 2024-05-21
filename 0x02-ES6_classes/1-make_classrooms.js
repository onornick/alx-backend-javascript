import ClassRoom from './0-classroom.js';

export default function initializeRooms() {
	const cls = new ClassRoom(19);
	const cls1 = new ClassRoom(20);
	const cls2 = new ClassRoom(34);
	return [cls, cls1, cls2];
}
