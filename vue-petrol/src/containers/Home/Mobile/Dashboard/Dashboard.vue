<template>
  <div class="tab">
    <div class="tab-item">
      <div class="tab-item--header">
        <label class="tab-item--header--title">My Credit Score</label>
        <label class="tab-item--header--label">View Report</label>
      </div>
      <div class="tab-item--content">
        <MeterBar />
      </div>
    </div>
    <div class="tab-item">
      <div class="tab--header">
        <label class="tab--header--title">My Score History</label>
        <label class="tab--header--label">
          <select class="form-control">
            <option>Darwin, 0800</option>
          </select>
        </label>
      </div>
      <div class="tab-item--content">
        <Chart :chart-data="datacollection" />
      </div>
    </div>
    
  </div>
</template>

<script src="./Dashboard"></script>

<style src="./Dashboard.css"></style>
