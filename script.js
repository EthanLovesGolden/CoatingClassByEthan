let viewCounts = { video1: 0, video2: 0, video3: 0 };

document.getElementById('video1').addEventListener('play', function() {
    viewCounts.video1 += 1;
    updateAdminViewCount('video1', viewCounts.video1);
});

document.getElementById('video2').addEventListener('play', function() {
    viewCounts.video2 += 1;
    updateAdminViewCount('video2', viewCounts.video2);
});

document.getElementById('video3').addEventListener('play', function() {
    viewCounts.video3 += 1;
    updateAdminViewCount('video3', viewCounts.video3);
});

function updateAdminViewCount(videoId, count) {
    // 假设有管理员界面，通过API或后端更新观看次数
    console.log(`${videoId} 的观看次数已更新为: ${count}`);
}
