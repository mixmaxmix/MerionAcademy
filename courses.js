// Router
const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());

if (params.filter) {
  filterCourses(params.filter)
  document.querySelector('.filter-active').classList.remove('filter-active');
  document.querySelector(`.filter#${params.filter}`).classList.add('filter-active');
}


// Filter
document.querySelectorAll('.filter').forEach(f => f.addEventListener('click', e => {
  const filterBtn = e.target;
  const filterBtnId = e.target.id;

  // Toggle active
  if (!filterBtn.className.includes('filter-active')) {
    document.querySelector('.filter-active').classList.remove('filter-active');
    filterBtn.classList.add('filter-active');
  }

  filterCourses(filterBtnId);
}))

function filterCourses(id) {
  const courses = document.querySelectorAll('.course');

  if (id === 'all') {
    courses.forEach(c => c.classList.remove('hidden'));
  } else {
    courses.forEach(c => {
      if (c.id === id) c.classList.remove('hidden');
      else c.classList.add('hidden');
    })
  }
}